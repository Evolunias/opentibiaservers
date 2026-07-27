import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend');
}

export default function RealMapDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend" />;
}
