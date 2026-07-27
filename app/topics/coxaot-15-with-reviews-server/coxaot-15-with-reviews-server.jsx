import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-with-reviews-server');
}

export default function Coxaot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-with-reviews-server" />;
}
