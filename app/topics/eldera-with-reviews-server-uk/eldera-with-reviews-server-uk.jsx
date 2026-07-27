import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-uk');
}

export default function ElderaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-uk" />;
}
