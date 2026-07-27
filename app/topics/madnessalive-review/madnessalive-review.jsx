import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-review');
}

export default function MadnessaliveReviewKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-review" />;
}
