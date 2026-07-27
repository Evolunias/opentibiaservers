import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-with-reviews-server');
}

export default function InfernalOt71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-with-reviews-server" />;
}
