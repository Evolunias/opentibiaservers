import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-high-exp-review');
}

export default function Tibia100HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-high-exp-review" />;
}
