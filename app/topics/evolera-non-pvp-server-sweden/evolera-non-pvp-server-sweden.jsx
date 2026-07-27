import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-sweden');
}

export default function EvoleraNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-sweden" />;
}
