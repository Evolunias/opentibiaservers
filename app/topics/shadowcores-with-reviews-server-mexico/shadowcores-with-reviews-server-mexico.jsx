import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-mexico');
}

export default function ShadowcoresWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-mexico" />;
}
