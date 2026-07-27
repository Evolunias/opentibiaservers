import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-with-reviews-server');
}

export default function InfernalOt15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-with-reviews-server" />;
}
