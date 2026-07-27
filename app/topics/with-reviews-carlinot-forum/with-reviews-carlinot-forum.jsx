import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-forum');
}

export default function WithReviewsCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-forum" />;
}
