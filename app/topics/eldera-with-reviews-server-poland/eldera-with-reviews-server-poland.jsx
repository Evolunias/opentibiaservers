import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-poland');
}

export default function ElderaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-poland" />;
}
