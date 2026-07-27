import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-seasonal-review');
}

export default function Tibia1098SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-seasonal-review" />;
}
