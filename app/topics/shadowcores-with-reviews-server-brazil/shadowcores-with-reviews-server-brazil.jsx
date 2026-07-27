import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-brazil');
}

export default function ShadowcoresWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-brazil" />;
}
