import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-north-america');
}

export default function AmeriaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-north-america" />;
}
