import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-ot-server');
}

export default function WithReviewsSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-ot-server" />;
}
