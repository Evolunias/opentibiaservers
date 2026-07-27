import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-with-reviews-server');
}

export default function Coxaot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-with-reviews-server" />;
}
