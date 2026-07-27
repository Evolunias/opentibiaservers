import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-forum');
}

export default function Tibia14WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-forum" />;
}
