export async function GET(req) {
  return Response.json({
    serverStats: {
      onlinePlayers: 42,
      totalCharacters: 156,
      status: 'Online',
      timestamp: new Date().toISOString()
    },
    players: {
      characters: [
        { id: 1, name: 'Draken', level: 250, experience: 1500000, vocation: 'Knight' },
        { id: 2, name: 'MysticSage', level: 235, experience: 1400000, vocation: 'Sorcerer' },
        { id: 3, name: 'FrostGuard', level: 228, experience: 1300000, vocation: 'Paladin' },
        { id: 4, name: 'NatureWalk', level: 215, experience: 1200000, vocation: 'Druid' },
        { id: 5, name: 'ShadowBlade', level: 205, experience: 1100000, vocation: 'Knight' }
      ]
    },
    announcements: {
      announcements: [
        {
          id: 1,
          title: 'Server Launch',
          content: 'Welcome to the new evolution-based MMORPG experience. Join thousands of warriors in epic battles.',
          author: 'Admin',
          created: new Date(Date.now() - 86400000).toISOString()
        },
        {
          id: 2,
          title: 'PvP Tournament Started',
          content: 'The biggest tournament of the season has begun. Claim your spot on the leaderboard and earn exclusive rewards.',
          author: 'GameMaster',
          created: new Date(Date.now() - 3600000).toISOString()
        }
      ]
    }
  }, { status: 200 });
}
