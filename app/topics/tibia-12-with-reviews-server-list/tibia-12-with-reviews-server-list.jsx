import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-server-list');
}

export default function Tibia12WithReviewsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-server-list" />;
}
