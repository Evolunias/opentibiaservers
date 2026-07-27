import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-forum');
}

export default function Tibia13WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-forum" />;
}
