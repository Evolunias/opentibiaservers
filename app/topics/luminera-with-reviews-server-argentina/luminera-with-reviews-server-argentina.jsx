import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-argentina');
}

export default function LumineraWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-argentina" />;
}
