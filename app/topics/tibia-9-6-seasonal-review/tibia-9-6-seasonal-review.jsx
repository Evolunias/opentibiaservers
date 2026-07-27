import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-review');
}

export default function Tibia96SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-review" />;
}
