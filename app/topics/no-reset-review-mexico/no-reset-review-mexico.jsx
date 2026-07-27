import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-mexico');
}

export default function NoResetReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-mexico" />;
}
