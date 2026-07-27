import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-mexico');
}

export default function ClassicusWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-mexico" />;
}
