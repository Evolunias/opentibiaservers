import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-reviews-client');
}

export default function Tibia81WithReviewsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-reviews-client" />;
}
