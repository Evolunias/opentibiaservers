import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-client');
}

export default function HighrateDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-client" />;
}
