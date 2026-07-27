import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-north-america');
}

export default function EvoleraBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-north-america" />;
}
