import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-europe');
}

export default function WithReviewsForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-europe" />;
}
