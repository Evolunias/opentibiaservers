import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-online');
}

export default function BestDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-online" />;
}
