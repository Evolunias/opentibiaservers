import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-sweden-server');
}

export default function AmeriaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-sweden-server" />;
}
