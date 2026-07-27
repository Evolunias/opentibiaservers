import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-north-america-server');
}

export default function AmeriaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-north-america-server" />;
}
