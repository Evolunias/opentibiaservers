import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-latin-america');
}

export default function MarolaotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-latin-america" />;
}
