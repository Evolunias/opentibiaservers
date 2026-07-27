import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-south-america-servers');
}

export default function EvoleraSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-south-america-servers" />;
}
