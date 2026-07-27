import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-online');
}

export default function CustomDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-online" />;
}
