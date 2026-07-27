import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-review');
}

export default function Tibia15SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-review" />;
}
