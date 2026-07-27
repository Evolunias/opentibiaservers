import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-review');
}

export default function Tibia14SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-review" />;
}
