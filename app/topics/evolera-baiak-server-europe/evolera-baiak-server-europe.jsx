import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-europe');
}

export default function EvoleraBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-europe" />;
}
