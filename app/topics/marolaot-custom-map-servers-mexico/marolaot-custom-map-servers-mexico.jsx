import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-mexico');
}

export default function MarolaotCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-mexico" />;
}
