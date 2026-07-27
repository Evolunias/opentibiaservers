import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-sweden');
}

export default function EvoleraPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-sweden" />;
}
