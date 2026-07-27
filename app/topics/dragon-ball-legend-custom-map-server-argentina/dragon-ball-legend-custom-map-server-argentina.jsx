import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-argentina');
}

export default function DragonBallLegendCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-argentina" />;
}
