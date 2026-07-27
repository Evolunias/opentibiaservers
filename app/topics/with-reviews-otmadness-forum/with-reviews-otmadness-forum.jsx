import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-forum');
}

export default function WithReviewsOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-forum" />;
}
