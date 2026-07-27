import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-chile');
}

export default function WithReviewsForumChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-chile" />;
}
