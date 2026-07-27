import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-review');
}

export default function Tibia96NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-review" />;
}
