import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-latin-america');
}

export default function MarolaotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-latin-america" />;
}
