import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-usa');
}

export default function DragonBallLegendCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-usa" />;
}
