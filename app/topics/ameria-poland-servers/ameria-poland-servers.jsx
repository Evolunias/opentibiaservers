import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-poland-servers');
}

export default function AmeriaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-poland-servers" />;
}
