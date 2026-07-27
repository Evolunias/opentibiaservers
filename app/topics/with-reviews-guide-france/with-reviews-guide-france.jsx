import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-france');
}

export default function WithReviewsGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-france" />;
}
