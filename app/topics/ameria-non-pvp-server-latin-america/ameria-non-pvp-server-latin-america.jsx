import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-latin-america');
}

export default function AmeriaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-latin-america" />;
}
