import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-review');
}

export default function Tibia12HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-review" />;
}
