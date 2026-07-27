import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-ot-server');
}

export default function WithReviewsClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-ot-server" />;
}
