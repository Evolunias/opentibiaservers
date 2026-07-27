import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-review');
}

export default function Tibia11NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-review" />;
}
