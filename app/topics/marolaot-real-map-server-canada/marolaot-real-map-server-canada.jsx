import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-canada');
}

export default function MarolaotRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-canada" />;
}
