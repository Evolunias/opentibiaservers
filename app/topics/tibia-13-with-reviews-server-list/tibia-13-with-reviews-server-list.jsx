import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-server-list');
}

export default function Tibia13WithReviewsServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-server-list" />;
}
