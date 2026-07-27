import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-reviews-servers');
}

export default function Tibia772WithReviewsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-reviews-servers" />;
}
