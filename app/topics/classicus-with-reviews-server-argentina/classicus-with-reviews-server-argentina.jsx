import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-argentina');
}

export default function ClassicusWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-argentina" />;
}
