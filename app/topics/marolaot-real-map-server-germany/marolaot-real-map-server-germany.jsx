import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-germany');
}

export default function MarolaotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-germany" />;
}
