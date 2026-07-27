import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-online');
}

export default function HighrateDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-online" />;
}
