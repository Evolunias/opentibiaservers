import pool from '@/lib/aiven';

export async function GET(req) {
  try {
    const conn = await pool.getConnection();
    try {
      // Get online players count (currently active)
      const [onlineResult] = await conn.execute(
        'SELECT COUNT(*) as count FROM players WHERE status = "active"'
      );
      const onlineCount = onlineResult[0]?.count || 0;

      // Get total characters count
      const [totalResult] = await conn.execute(
        'SELECT COUNT(*) as count FROM players'
      );
      const totalCharacters = totalResult[0]?.count || 0;

      // Get server start date for uptime calculation
      const [creationResult] = await conn.execute(
        'SELECT MIN(created) as server_start FROM players'
      );
      const serverStart = creationResult[0]?.server_start;

      return Response.json({
        onlinePlayers: onlineCount,
        totalCharacters: totalCharacters,
        serverStartDate: serverStart,
        status: 'Online'
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Server stats error:', error);
    return Response.json({
      onlinePlayers: 0,
      totalCharacters: 0,
      status: 'Offline',
      error: error.message
    }, { status: 500 });
  }
}
