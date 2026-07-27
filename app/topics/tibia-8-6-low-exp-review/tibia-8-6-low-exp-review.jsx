import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-low-exp-review');
}

export default function Tibia86LowExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-low-exp-review" />;
}
