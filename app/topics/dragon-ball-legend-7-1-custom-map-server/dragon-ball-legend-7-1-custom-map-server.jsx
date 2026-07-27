import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-7-1-custom-map-server');
}

export default function DragonBallLegend71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-7-1-custom-map-server" />;
}
