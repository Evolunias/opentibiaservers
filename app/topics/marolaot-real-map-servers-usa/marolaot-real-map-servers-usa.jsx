import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-usa');
}

export default function MarolaotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-usa" />;
}
