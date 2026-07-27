import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-uk');
}

export default function WithReviewsForumUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-uk" />;
}
