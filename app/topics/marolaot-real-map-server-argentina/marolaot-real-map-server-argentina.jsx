import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-server-argentina');
}

export default function MarolaotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-server-argentina" />;
}
