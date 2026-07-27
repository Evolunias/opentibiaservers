import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-ot');
}

export default function RealMapDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-ot" />;
}
