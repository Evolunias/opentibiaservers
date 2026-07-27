import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-uk');
}

export default function UnlineWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-uk" />;
}
