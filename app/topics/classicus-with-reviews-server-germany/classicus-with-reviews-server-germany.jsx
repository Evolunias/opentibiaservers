import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-germany');
}

export default function ClassicusWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-germany" />;
}
