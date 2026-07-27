import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-guide');
}

export default function HighrateDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-guide" />;
}
