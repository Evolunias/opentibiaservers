import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-reviews-forum');
}

export default function Tibia1098WithReviewsForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-reviews-forum" />;
}
