import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-sweden');
}

export default function EvoleraPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-sweden" />;
}
