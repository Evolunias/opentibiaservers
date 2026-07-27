import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-with-reviews-server');
}

export default function Coxaot14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-with-reviews-server" />;
}
