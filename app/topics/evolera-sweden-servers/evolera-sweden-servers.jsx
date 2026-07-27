import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-sweden-servers');
}

export default function EvoleraSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-sweden-servers" />;
}
