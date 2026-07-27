import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-forum');
}

export default function WithReviewsKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-forum" />;
}
