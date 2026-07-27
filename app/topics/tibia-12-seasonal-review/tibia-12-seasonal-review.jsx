import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-review');
}

export default function Tibia12SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-review" />;
}
