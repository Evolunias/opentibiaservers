import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-dragon-ball-legend-server');
}

export default function CustomMapDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-dragon-ball-legend-server" />;
}
