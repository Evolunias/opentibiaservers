import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-canada');
}

export default function WithReviewsForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-canada" />;
}
