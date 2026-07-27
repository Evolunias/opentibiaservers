import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-argentina');
}

export default function TibiascapeWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-argentina" />;
}
