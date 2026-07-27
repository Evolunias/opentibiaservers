import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-argentina');
}

export default function OtmadnessWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-argentina" />;
}
