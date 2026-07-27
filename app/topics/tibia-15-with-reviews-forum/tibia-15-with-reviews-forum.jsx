import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-reviews-forum');
}

export default function Tibia15WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-reviews-forum" />;
}
