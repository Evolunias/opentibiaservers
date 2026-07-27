import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-client');
}

export default function WithReviewsLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-client" />;
}
