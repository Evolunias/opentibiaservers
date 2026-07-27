import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-mexico');
}

export default function WithReviewsForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-mexico" />;
}
