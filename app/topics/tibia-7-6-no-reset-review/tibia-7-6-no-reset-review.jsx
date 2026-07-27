import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-no-reset-review');
}

export default function Tibia76NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-no-reset-review" />;
}
