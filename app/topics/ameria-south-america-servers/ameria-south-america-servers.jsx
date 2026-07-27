import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-south-america-servers');
}

export default function AmeriaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-south-america-servers" />;
}
