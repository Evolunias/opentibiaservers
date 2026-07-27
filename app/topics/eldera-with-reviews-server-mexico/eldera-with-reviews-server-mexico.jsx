import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-mexico');
}

export default function ElderaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-mexico" />;
}
