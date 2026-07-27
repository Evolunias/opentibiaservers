import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-mexico');
}

export default function OtmadnessWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-mexico" />;
}
