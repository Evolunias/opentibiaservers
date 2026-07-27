import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-mexico');
}

export default function WithReviewsOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-mexico" />;
}
