import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-france');
}

export default function AmeriaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-france" />;
}
