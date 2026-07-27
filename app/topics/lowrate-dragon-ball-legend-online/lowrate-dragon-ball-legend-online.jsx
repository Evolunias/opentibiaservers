import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-online');
}

export default function LowrateDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-online" />;
}
