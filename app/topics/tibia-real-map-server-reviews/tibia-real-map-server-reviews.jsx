import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-reviews');
}

export default function TibiaRealMapServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-reviews" />;
}
