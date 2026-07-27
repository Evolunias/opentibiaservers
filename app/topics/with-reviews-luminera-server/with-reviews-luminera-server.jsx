import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-server');
}

export default function WithReviewsLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-server" />;
}
