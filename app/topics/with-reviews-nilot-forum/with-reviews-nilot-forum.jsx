import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-forum');
}

export default function WithReviewsNilotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-forum" />;
}
