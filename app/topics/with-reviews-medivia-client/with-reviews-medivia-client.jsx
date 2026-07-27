import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-client');
}

export default function WithReviewsMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-client" />;
}
