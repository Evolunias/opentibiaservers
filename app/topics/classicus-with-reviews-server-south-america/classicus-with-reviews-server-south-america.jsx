import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-south-america');
}

export default function ClassicusWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-south-america" />;
}
