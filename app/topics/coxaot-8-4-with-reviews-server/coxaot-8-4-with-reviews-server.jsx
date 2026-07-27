import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-with-reviews-server');
}

export default function Coxaot84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-with-reviews-server" />;
}
