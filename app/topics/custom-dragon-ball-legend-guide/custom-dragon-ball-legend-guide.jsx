import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-guide');
}

export default function CustomDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-guide" />;
}
