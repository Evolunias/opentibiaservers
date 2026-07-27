import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-with-reviews-server');
}

export default function Coxaot86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-with-reviews-server" />;
}
