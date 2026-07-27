import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-9-6-custom-map-server');
}

export default function DragonBallLegend96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-9-6-custom-map-server" />;
}
