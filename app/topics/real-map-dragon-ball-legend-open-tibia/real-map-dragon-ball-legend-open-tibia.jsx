import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-open-tibia');
}

export default function RealMapDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-open-tibia" />;
}
