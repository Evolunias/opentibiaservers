import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-reviews');
}

export default function ClassicusReviewsKeywordPage() {
  return <StaticKeywordPage slug="classicus-reviews" />;
}
