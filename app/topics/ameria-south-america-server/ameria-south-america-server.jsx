import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-south-america-server');
}

export default function AmeriaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-south-america-server" />;
}
