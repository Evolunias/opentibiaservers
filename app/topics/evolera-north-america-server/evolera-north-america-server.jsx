import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-north-america-server');
}

export default function EvoleraNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-north-america-server" />;
}
