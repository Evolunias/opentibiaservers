import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-france');
}

export default function OtmadnessWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-france" />;
}
