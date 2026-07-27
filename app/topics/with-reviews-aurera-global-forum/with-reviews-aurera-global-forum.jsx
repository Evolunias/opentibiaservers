import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-forum');
}

export default function WithReviewsAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-forum" />;
}
