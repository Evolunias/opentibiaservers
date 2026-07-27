import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-review');
}

export default function Tibia12NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-review" />;
}
