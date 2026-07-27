import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-ots');
}

export default function RealMapDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-ots" />;
}
