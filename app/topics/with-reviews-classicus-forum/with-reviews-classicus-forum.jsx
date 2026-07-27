import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-forum');
}

export default function WithReviewsClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-forum" />;
}
