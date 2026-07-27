import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-review-france');
}

export default function HighExpReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-review-france" />;
}
