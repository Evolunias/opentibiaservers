import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-germany');
}

export default function ShadowcoresWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-germany" />;
}
