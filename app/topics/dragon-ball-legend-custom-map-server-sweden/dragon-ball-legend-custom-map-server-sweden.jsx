import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-sweden');
}

export default function DragonBallLegendCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-sweden" />;
}
