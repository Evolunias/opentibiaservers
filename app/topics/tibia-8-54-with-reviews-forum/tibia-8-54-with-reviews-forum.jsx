import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-reviews-forum');
}

export default function Tibia854WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-reviews-forum" />;
}
