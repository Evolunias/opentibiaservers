import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-with-reviews-server');
}

export default function Coxaot96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-with-reviews-server" />;
}
