import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-servers-usa');
}

export default function NtoStarRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-servers-usa" />;
}
