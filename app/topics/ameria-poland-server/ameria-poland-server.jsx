import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-poland-server');
}

export default function AmeriaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-poland-server" />;
}
