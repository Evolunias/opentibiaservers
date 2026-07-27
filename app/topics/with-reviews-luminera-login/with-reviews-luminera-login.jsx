import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-login');
}

export default function WithReviewsLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-login" />;
}
