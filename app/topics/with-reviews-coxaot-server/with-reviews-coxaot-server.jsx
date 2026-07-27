import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-server');
}

export default function WithReviewsCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-server" />;
}
