import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-guide');
}

export default function BestDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-guide" />;
}
