import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-with-reviews-server');
}

export default function Coxaot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-with-reviews-server" />;
}
