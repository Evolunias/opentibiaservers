import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-ot-server');
}

export default function WithReviewsThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-ot-server" />;
}
