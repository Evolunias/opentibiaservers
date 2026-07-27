import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-official');
}

export default function RealMapDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-official" />;
}
