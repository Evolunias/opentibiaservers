import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-argentina');
}

export default function TibianusWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-argentina" />;
}
