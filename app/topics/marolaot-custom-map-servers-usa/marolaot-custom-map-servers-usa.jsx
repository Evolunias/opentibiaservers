import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-usa');
}

export default function MarolaotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-usa" />;
}
