import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-europe');
}

export default function MarolaotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-europe" />;
}
