import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-online');
}

export default function PopularDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-online" />;
}
