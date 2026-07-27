import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-review');
}

export default function Tibia13HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-review" />;
}
