import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-sweden');
}

export default function MarolaotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-sweden" />;
}
