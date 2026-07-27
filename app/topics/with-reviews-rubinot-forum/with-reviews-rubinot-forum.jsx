import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-forum');
}

export default function WithReviewsRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-forum" />;
}
