import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-usa');
}

export default function EvoleraBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-usa" />;
}
