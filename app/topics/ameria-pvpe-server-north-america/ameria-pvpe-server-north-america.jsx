import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-north-america');
}

export default function AmeriaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-north-america" />;
}
