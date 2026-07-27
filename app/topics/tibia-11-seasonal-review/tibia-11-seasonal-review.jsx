import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-review');
}

export default function Tibia11SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-review" />;
}
