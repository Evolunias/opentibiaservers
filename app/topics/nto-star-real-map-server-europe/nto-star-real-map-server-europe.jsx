import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-europe');
}

export default function NtoStarRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-europe" />;
}
