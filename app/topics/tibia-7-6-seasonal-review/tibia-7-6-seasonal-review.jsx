import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-review');
}

export default function Tibia76SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-review" />;
}
