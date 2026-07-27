import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-guide');
}

export default function WithReviewsSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-guide" />;
}
