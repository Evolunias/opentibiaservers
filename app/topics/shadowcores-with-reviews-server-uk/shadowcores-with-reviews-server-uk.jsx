import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-uk');
}

export default function ShadowcoresWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-uk" />;
}
