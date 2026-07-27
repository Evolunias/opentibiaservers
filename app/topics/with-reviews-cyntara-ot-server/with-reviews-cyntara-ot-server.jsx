import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-ot-server');
}

export default function WithReviewsCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-ot-server" />;
}
