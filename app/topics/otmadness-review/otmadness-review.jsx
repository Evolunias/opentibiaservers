import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-review');
}

export default function OtmadnessReviewKeywordPage() {
  return <StaticKeywordPage slug="otmadness-review" />;
}
