import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-argentina');
}

export default function EvoleraBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-argentina" />;
}
