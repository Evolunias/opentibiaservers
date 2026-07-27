import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-review');
}

export default function Tibia14NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-review" />;
}
