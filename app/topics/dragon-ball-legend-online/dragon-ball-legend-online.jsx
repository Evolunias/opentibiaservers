import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-online');
}

export default function DragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-online" />;
}
