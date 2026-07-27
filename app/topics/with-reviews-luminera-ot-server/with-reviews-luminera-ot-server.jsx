import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-ot-server');
}

export default function WithReviewsLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-ot-server" />;
}
