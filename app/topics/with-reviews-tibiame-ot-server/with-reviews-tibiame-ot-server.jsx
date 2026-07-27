import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-ot-server');
}

export default function WithReviewsTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-ot-server" />;
}
