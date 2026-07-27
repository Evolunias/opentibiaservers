import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-germany');
}

export default function EvoleraBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-germany" />;
}
