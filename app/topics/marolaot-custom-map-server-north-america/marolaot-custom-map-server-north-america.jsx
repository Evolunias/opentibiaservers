import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-north-america');
}

export default function MarolaotCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-north-america" />;
}
