import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-client');
}

export default function AmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="ameria-client" />;
}
