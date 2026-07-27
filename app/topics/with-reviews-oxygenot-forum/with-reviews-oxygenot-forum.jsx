import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-forum');
}

export default function WithReviewsOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-forum" />;
}
