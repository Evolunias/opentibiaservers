import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-online');
}

export default function NoResetDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-online" />;
}
