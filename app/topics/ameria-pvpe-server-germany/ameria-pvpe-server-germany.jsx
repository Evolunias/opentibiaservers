import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-germany');
}

export default function AmeriaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-germany" />;
}
