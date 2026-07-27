import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-guide');
}

export default function PopularDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-guide" />;
}
