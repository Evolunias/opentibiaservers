import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-no-reset-review');
}

export default function Tibia100NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-no-reset-review" />;
}
