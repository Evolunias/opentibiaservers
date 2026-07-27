import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-review');
}

export default function Tibia15HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-review" />;
}
