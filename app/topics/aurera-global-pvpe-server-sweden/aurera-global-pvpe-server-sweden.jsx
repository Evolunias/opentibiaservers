import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-sweden');
}

export default function AureraGlobalPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-sweden" />;
}
