import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-north-america-servers');
}

export default function AmeriaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-north-america-servers" />;
}
