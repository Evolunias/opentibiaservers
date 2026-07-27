import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-review');
}

export default function Tibia15LowExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-review" />;
}
