import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-argentina');
}

export default function OlderaWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-argentina" />;
}
