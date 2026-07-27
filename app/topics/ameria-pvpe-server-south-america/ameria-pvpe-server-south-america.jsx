import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-south-america');
}

export default function AmeriaPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-south-america" />;
}
