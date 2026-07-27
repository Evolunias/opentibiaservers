import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-europe');
}

export default function ElderaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-europe" />;
}
