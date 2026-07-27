import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-forum');
}

export default function Tibia12WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-forum" />;
}
