import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-sweden-servers');
}

export default function AmeriaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-sweden-servers" />;
}
