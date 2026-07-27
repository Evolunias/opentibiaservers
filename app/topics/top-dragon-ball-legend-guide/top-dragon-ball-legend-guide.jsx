import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-guide');
}

export default function TopDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-guide" />;
}
