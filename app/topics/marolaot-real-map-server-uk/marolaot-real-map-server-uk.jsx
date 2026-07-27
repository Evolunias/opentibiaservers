import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-uk');
}

export default function MarolaotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-uk" />;
}
