import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-sweden');
}

export default function NtoStarRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-sweden" />;
}
