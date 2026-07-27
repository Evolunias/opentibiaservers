import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-reviews-forum');
}

export default function Tibia100WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-reviews-forum" />;
}
