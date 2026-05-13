import pool from '@/lib/aiven';

export async function GET(req) {
  try {
    const conn = await pool.getConnection();
    try {
      // Get total characters count
      const [totalResult] = await conn.execute(
        'SELECT COUNT(*) as count FROM players'
      );
      const totalCharacters = totalResult[0]?.count || 0;

      // Get characters with highest level (online indicator)
      const [activeResult] = await conn.execute(
        'SELECT COUNT(*) as count FROM players WHERE level > 0'
      );
      const onlineCount = activeResult[0]?.count || 0;

      // Get server start date for uptime calculation
      const [creationResult] = await conn.execute(
        'SELECT MIN(created) as server_start FROM players'
      );
      const serverStart = creationResult[0]?.server_start;

      return Response.json({
        onlinePlayers: onlineCount,
        totalCharacters: totalCharacters,
        serverStartDate: serverStart,
        status: onlineCount > 0 ? 'Online' : 'Online',
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('[server-stats] Database error:', error.message, error.code);
    return Response.json({
      onlinePlayers: 0,
      totalCharacters: 0,
      status: 'Offline',
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 200 });
  }
}
