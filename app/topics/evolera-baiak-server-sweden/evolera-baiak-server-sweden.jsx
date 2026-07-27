import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-sweden');
}

export default function EvoleraBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-sweden" />;
}
