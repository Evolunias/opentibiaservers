import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-usa');
}

export default function MarolaotRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-usa" />;
}
