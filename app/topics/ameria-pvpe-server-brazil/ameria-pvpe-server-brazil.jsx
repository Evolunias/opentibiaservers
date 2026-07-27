import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-brazil');
}

export default function AmeriaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-brazil" />;
}
