import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-brazil');
}

export default function MarolaotCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-brazil" />;
}
