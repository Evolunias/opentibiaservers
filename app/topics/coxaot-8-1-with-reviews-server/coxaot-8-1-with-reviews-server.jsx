import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-with-reviews-server');
}

export default function Coxaot81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-with-reviews-server" />;
}
