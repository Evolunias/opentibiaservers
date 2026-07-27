import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-brazil');
}

export default function WithReviewsForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-brazil" />;
}
