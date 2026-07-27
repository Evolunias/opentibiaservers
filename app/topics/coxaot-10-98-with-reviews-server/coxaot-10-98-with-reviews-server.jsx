import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-with-reviews-server');
}

export default function Coxaot1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-with-reviews-server" />;
}
