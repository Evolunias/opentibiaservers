import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-review');
}

export default function Tibia13NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-review" />;
}
