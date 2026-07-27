import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-latin-america');
}

export default function MarolaotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-latin-america" />;
}
