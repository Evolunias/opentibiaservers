import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot-server');
}

export default function WithReviewsNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot-server" />;
}
