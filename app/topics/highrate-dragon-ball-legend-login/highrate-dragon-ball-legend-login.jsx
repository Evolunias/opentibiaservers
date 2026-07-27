import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-login');
}

export default function HighrateDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-login" />;
}
