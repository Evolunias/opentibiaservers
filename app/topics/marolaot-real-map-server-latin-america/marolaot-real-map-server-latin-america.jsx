import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-latin-america');
}

export default function MarolaotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-latin-america" />;
}
