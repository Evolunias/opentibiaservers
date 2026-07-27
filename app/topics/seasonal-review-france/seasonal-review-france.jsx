import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-review-france');
}

export default function SeasonalReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-review-france" />;
}
