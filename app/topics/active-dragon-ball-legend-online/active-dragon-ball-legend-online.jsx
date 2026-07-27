import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-online');
}

export default function ActiveDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-online" />;
}
