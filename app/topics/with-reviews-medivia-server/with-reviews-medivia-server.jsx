import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-server');
}

export default function WithReviewsMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-server" />;
}
