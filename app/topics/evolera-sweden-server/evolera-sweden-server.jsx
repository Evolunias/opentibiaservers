import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-sweden-server');
}

export default function EvoleraSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-sweden-server" />;
}
