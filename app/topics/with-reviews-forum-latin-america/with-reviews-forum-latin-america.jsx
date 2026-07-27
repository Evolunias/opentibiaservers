import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-latin-america');
}

export default function WithReviewsForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-latin-america" />;
}
