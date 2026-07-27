import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-brazil');
}

export default function OtmadnessWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-brazil" />;
}
