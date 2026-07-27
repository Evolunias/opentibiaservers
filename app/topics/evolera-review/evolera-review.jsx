import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-review');
}

export default function EvoleraReviewKeywordPage() {
  return <StaticKeywordPage slug="evolera-review" />;
}
