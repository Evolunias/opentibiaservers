import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-review');
}

export default function Tibia14LowExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-review" />;
}
