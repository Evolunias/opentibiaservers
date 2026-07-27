import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-high-exp-review');
}

export default function Tibia84HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-high-exp-review" />;
}
