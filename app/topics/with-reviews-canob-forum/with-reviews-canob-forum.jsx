import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-forum');
}

export default function WithReviewsCanobForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-forum" />;
}
