import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-review');
}

export default function Tibia74SeasonalReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-review" />;
}
