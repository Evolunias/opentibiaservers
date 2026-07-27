import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-south-america');
}

export default function FreshStartReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-south-america" />;
}
