import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-france');
}

export default function NoResetReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-france" />;
}
