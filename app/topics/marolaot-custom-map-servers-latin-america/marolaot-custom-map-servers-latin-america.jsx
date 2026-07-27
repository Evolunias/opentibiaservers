import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-latin-america');
}

export default function MarolaotCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-latin-america" />;
}
