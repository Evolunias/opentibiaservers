import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-with-reviews-server');
}

export default function Coxaot76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-with-reviews-server" />;
}
