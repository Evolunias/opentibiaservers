import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-reviews-client');
}

export default function Tibia772WithReviewsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-reviews-client" />;
}
