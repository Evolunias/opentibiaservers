import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-sweden');
}

export default function WithReviewsForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-sweden" />;
}
