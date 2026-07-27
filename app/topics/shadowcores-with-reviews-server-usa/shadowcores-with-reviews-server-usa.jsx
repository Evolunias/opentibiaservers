import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-usa');
}

export default function ShadowcoresWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-usa" />;
}
