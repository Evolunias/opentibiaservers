import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-reviews-forum');
}

export default function Tibia81WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-reviews-forum" />;
}
