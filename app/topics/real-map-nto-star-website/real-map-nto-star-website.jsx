import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-website');
}

export default function RealMapNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-website" />;
}
