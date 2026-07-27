import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-players-online');
}

export default function DragonBallLegendPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-players-online" />;
}
