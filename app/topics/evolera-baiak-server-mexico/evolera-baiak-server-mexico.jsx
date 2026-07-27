import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-mexico');
}

export default function EvoleraBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-mexico" />;
}
