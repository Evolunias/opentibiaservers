import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend');
}

export default function HighrateDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend" />;
}
