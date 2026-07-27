import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-review');
}

export default function Tibia12LowExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-review" />;
}
