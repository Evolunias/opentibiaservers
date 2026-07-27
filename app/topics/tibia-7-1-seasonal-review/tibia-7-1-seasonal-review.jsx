import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-review');
}

export default function Tibia71SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-review" />;
}
