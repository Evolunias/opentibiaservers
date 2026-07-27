import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-reviews');
}

export default function AureraGlobalReviewsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-reviews" />;
}
