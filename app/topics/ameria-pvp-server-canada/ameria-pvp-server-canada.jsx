import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-canada');
}

export default function AmeriaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-canada" />;
}
