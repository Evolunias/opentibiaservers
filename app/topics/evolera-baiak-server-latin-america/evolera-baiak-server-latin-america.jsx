import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-latin-america');
}

export default function EvoleraBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-latin-america" />;
}
