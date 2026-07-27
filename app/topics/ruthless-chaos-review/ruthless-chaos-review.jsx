import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-review');
}

export default function RuthlessChaosReviewKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-review" />;
}
