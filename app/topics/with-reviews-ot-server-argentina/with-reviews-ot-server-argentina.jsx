import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-argentina');
}

export default function WithReviewsOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-argentina" />;
}
