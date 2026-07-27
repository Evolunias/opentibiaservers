import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-reviews-client');
}

export default function Tibia854WithReviewsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-reviews-client" />;
}
