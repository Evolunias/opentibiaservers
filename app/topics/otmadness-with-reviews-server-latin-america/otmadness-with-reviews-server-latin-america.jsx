import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-latin-america');
}

export default function OtmadnessWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-latin-america" />;
}
