import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-no-reset-review');
}

export default function Tibia81NoResetReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-no-reset-review" />;
}
