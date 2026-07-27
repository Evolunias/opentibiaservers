import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-guide');
}

export default function LowrateDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-guide" />;
}
