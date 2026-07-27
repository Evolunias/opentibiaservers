import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-mexico');
}

export default function MarolaotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-mexico" />;
}
