import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-review');
}

export default function Tibia772SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-review" />;
}
