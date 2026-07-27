import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-mexico');
}

export default function MarolaotRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-mexico" />;
}
