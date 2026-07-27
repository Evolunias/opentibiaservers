import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-ot-server');
}

export default function WithReviewsMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-ot-server" />;
}
