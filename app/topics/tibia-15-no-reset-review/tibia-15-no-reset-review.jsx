import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-review');
}

export default function Tibia15NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-review" />;
}
