import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-north-america');
}

export default function MarolaotRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-north-america" />;
}
