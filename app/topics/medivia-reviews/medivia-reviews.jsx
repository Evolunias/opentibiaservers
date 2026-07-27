import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-reviews');
}

export default function MediviaReviewsKeywordPage() {
  return <StaticKeywordPage slug="medivia-reviews" />;
}
