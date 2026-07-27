import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-high-exp-review');
}

export default function Tibia1098HighExpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-high-exp-review" />;
}
