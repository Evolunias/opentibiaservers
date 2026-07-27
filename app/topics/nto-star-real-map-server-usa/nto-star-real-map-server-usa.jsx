import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-usa');
}

export default function NtoStarRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-usa" />;
}
