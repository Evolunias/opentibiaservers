import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-south-america-server');
}

export default function EvoleraSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-south-america-server" />;
}
