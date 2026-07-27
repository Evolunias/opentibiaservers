import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-north-america');
}

export default function MarolaotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-north-america" />;
}
