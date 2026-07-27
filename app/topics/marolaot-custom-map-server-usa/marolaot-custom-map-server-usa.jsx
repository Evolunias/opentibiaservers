import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-usa');
}

export default function MarolaotCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-usa" />;
}
