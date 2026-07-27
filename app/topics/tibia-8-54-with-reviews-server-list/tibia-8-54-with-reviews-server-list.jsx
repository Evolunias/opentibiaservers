import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-reviews-server-list');
}

export default function Tibia854WithReviewsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-reviews-server-list" />;
}
