import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-sweden');
}

export default function MarolaotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-sweden" />;
}
