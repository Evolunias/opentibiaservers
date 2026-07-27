import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-official');
}

export default function WithReviewsShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-official" />;
}
