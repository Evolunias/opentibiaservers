import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-germany');
}

export default function WithReviewsForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-germany" />;
}
