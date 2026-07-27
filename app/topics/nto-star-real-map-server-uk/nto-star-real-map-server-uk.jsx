import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-uk');
}

export default function NtoStarRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-uk" />;
}
