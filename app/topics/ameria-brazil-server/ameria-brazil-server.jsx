import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-brazil-server');
}

export default function AmeriaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-brazil-server" />;
}
