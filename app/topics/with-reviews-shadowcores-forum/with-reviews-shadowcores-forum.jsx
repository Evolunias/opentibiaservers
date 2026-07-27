import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-forum');
}

export default function WithReviewsShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-forum" />;
}
