import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-north-america-servers');
}

export default function EvoleraNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-north-america-servers" />;
}
