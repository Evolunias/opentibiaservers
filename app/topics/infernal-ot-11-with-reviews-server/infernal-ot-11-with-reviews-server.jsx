import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-with-reviews-server');
}

export default function InfernalOt11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-with-reviews-server" />;
}
