import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-uk');
}

export default function ClassicusWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-uk" />;
}
