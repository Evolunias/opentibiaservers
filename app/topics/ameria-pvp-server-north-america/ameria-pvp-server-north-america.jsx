import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-north-america');
}

export default function AmeriaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-north-america" />;
}
