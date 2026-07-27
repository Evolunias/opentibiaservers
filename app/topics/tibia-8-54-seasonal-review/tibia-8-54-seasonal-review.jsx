import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-review');
}

export default function Tibia854SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-review" />;
}
