import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-review');
}

export default function Tibia96LowExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-review" />;
}
