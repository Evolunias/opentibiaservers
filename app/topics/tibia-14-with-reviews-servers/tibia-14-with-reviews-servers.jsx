import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-servers');
}

export default function Tibia14WithReviewsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-servers" />;
}
