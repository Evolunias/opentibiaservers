import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-review');
}

export default function AureraGlobalReviewKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-review" />;
}
