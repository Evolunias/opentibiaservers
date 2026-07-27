import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-review');
}

export default function Tibia76LowExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-review" />;
}
