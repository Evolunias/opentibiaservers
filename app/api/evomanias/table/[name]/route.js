import pool from '@/lib/aiven';

export async function GET(req, { params }) {
  const tableName = params.name;

  // Sanitize table name to prevent SQL injection
  if (!/^[a-zA-Z0-9_]+$/.test(tableName)) {
    return Response.json(
      { error: 'Invalid table name' },
      { status: 400 }
    );
  }

  try {
    const conn = await pool.getConnection();
    try {
      // Get all columns for this table
      const [columns] = await conn.execute(
        `SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY 
         FROM INFORMATION_SCHEMA.COLUMNS 
         WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
        [tableName]
      );

      if (columns.length === 0) {
        return Response.json(
          { error: 'Table not found' },
          { status: 404 }
        );
      }

      // Get page and limit from query params
      const page = parseInt(req.nextUrl.searchParams.get('page') || '1');
      const limit = Math.min(parseInt(req.nextUrl.searchParams.get('limit') || '50'), 500);
      const offset = (page - 1) * limit;
      const sortBy = req.nextUrl.searchParams.get('sortBy') || 'id';
      const sortOrder = req.nextUrl.searchParams.get('sortOrder') || 'DESC';

      // Get total count
      const [countResult] = await conn.execute(
        `SELECT COUNT(*) as total FROM ${tableName}`
      );
      const total = countResult[0]?.total || 0;

      // Get data
      const [data] = await conn.execute(
        `SELECT * FROM ${tableName} ORDER BY ${sortBy} ${sortOrder} LIMIT ${limit} OFFSET ${offset}`
      );

      return Response.json({
        table: tableName,
        columns: columns.map(c => ({
          name: c.COLUMN_NAME,
          type: c.COLUMN_TYPE,
          nullable: c.IS_NULLABLE === 'YES',
          isPrimaryKey: c.COLUMN_KEY === 'PRI'
        })),
        data: data || [],
        pagination: {
          page,
          limit,
          offset,
          total,
          pages: Math.ceil(total / limit)
        },
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Table fetch error:', error);
    return Response.json({
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
