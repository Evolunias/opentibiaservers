import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-review');
}

export default function Tibia100SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-review" />;
}
