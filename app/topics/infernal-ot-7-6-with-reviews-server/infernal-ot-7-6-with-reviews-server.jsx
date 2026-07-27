import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-with-reviews-server');
}

export default function InfernalOt76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-with-reviews-server" />;
}
