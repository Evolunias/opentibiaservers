import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera');
}

export default function WithReviewsLumineraKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera" />;
}
