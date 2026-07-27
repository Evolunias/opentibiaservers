import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-forum');
}

export default function WithReviewsRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-forum" />;
}
