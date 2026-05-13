import pool from '@/lib/aiven';

export async function GET(req) {
  try {
    const conn = await pool.getConnection();
    try {
      const [onlinePlayers] = await conn.execute(
        `SELECT id, name, level, vocation, status, created 
         FROM players 
         WHERE status = "active" 
         ORDER BY level DESC, experience DESC 
         LIMIT 50`
      );

      return Response.json({
        onlinePlayers: onlinePlayers || [],
        count: (onlinePlayers || []).length,
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Online players error:', error);
    return Response.json({
      onlinePlayers: [],
      count: 0,
      error: error.message
    }, { status: 500 });
  }
}
