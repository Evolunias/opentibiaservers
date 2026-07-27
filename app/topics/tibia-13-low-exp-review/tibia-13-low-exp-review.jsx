import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-review');
}

export default function Tibia13LowExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-review" />;
}
