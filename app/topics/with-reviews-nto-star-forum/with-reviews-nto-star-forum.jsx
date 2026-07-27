import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-forum');
}

export default function WithReviewsNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-forum" />;
}
