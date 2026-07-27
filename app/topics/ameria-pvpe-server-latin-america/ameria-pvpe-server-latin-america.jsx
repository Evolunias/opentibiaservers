import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvpe-server-latin-america');
}

export default function AmeriaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvpe-server-latin-america" />;
}
