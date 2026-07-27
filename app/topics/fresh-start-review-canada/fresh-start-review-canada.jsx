import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-canada');
}

export default function FreshStartReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-canada" />;
}
