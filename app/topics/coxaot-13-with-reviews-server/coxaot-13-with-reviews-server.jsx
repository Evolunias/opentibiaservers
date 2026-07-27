import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-with-reviews-server');
}

export default function Coxaot13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-with-reviews-server" />;
}
