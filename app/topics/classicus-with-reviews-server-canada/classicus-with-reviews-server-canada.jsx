import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-canada');
}

export default function ClassicusWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-canada" />;
}
