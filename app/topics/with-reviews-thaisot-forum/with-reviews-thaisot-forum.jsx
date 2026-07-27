import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-forum');
}

export default function WithReviewsThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-forum" />;
}
