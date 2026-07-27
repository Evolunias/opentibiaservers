import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-forum');
}

export default function Tibia11WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-forum" />;
}
