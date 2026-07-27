import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-reviews');
}

export default function AlasteraReviewsKeywordPage() {
  return <StaticKeywordPage slug="alastera-reviews" />;
}
