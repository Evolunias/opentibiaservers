import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-review');
}

export default function Tibia81SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-review" />;
}
