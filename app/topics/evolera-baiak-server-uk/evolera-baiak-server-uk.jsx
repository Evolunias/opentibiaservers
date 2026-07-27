import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-uk');
}

export default function EvoleraBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-uk" />;
}
