import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-with-reviews-server');
}

export default function Coxaot80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-with-reviews-server" />;
}
