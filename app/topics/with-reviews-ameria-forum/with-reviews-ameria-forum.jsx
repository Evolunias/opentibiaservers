import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-forum');
}

export default function WithReviewsAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-forum" />;
}
