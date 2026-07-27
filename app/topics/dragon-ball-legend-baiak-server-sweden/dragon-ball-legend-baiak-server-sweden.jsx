import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-sweden');
}

export default function DragonBallLegendBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-sweden" />;
}
