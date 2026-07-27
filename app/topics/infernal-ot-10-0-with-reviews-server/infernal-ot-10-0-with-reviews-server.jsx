import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-with-reviews-server');
}

export default function InfernalOt100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-with-reviews-server" />;
}
