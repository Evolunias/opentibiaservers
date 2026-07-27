import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-usa');
}

export default function ClassicusWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-usa" />;
}
