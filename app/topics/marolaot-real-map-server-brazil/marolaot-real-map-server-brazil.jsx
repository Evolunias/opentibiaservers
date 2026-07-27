import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-brazil');
}

export default function MarolaotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-brazil" />;
}
