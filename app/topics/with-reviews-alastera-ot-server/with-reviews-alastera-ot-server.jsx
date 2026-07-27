import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-ot-server');
}

export default function WithReviewsAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-ot-server" />;
}
