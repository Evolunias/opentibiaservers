import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-servers');
}

export default function Tibia13WithReviewsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-servers" />;
}
