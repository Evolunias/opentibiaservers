import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-usa');
}

export default function WithReviewsForumUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-usa" />;
}
