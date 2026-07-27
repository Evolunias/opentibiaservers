import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-brazil');
}

export default function MarolaotCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-brazil" />;
}
