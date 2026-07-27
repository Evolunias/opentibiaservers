import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-review');
}

export default function Tibia11HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-review" />;
}
