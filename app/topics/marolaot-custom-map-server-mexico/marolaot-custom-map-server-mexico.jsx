import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-mexico');
}

export default function MarolaotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-mexico" />;
}
