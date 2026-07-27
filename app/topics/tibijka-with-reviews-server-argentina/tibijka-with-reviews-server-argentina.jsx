import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-argentina');
}

export default function TibijkaWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-argentina" />;
}
