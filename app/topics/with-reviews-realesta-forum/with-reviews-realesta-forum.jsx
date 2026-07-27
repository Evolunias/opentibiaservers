import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-forum');
}

export default function WithReviewsRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-forum" />;
}
