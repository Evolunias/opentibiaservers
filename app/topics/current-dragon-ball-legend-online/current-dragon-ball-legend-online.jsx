import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-online');
}

export default function CurrentDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-online" />;
}
