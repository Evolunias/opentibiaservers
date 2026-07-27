import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-online');
}

export default function TopDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-online" />;
}
