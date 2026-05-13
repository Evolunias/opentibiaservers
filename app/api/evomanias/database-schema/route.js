import pool from '@/lib/aiven';

export async function GET(req) {
  try {
    const conn = await pool.getConnection();
    try {
      // Get all tables in the database
      const [tables] = await conn.execute(
        'SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = DATABASE()'
      );

      const tableInfo = [];

      // For each table, get column information
      for (const table of tables) {
        const tableName = table.TABLE_NAME;
        
        // Get columns for this table
        const [columns] = await conn.execute(
          `SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY 
           FROM INFORMATION_SCHEMA.COLUMNS 
           WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
          [tableName]
        );

        // Get row count
        const [countResult] = await conn.execute(
          `SELECT COUNT(*) as count FROM ${tableName}`
        );

        tableInfo.push({
          name: tableName,
          rowCount: countResult[0]?.count || 0,
          columns: columns
        });
      }

      return Response.json({
        database: process.env.AIVEN_MYSQL_DATABASE,
        tables: tableInfo,
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Database schema error:', error);
    return Response.json({
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
