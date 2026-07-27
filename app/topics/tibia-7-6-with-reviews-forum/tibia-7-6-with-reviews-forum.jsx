import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-reviews-forum');
}

export default function Tibia76WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-reviews-forum" />;
}
