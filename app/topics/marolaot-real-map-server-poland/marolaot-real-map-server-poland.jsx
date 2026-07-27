import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-poland');
}

export default function MarolaotRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-poland" />;
}
