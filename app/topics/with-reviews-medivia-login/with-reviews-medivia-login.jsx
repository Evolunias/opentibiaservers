import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-login');
}

export default function WithReviewsMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-login" />;
}
