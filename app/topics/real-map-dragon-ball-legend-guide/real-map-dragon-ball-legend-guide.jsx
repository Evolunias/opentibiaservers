import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-guide');
}

export default function RealMapDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-guide" />;
}
