import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-latin-america');
}

export default function MarolaotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-latin-america" />;
}
