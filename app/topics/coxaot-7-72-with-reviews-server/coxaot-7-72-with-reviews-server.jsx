import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-72-with-reviews-server');
}

export default function Coxaot772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-72-with-reviews-server" />;
}
