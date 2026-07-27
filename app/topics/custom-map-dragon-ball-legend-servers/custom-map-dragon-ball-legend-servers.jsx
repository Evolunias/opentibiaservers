import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-dragon-ball-legend-servers');
}

export default function CustomMapDragonBallLegendServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-dragon-ball-legend-servers" />;
}
