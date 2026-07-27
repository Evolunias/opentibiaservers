import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-poland');
}

export default function WithReviewsForumPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-poland" />;
}
