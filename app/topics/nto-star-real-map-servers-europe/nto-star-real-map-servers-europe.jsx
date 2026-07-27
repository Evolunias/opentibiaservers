import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-servers-europe');
}

export default function NtoStarRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-servers-europe" />;
}
