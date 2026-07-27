import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-poland');
}

export default function ShadowcoresWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-poland" />;
}
