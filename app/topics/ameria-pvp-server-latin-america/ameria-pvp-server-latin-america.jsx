import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-latin-america');
}

export default function AmeriaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-latin-america" />;
}
