import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-11-custom-map-server');
}

export default function DragonBallLegend11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-11-custom-map-server" />;
}
