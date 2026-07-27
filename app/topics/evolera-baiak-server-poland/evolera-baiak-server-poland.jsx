import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-poland');
}

export default function EvoleraBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-poland" />;
}
