import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-review');
}

export default function Tibia14HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-review" />;
}
