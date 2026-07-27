import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-mexico');
}

export default function AmeriaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-mexico" />;
}
