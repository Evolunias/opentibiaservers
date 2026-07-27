import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-canada');
}

export default function EvoleraBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-canada" />;
}
