import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-reviews');
}

export default function ShadowcoresReviewsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-reviews" />;
}
