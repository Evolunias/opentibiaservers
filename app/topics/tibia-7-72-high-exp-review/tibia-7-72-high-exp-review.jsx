import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-high-exp-review');
}

export default function Tibia772HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-high-exp-review" />;
}
