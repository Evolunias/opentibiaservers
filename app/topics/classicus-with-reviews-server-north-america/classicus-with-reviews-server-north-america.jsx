import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-north-america');
}

export default function ClassicusWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-north-america" />;
}
