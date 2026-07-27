import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-with-reviews-server');
}

export default function Coxaot74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-with-reviews-server" />;
}
