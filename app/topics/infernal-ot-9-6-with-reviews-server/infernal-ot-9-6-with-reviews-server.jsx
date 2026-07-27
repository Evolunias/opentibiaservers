import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-with-reviews-server');
}

export default function InfernalOt96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-with-reviews-server" />;
}
