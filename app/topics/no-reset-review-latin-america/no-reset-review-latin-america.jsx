import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-latin-america');
}

export default function NoResetReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-latin-america" />;
}
