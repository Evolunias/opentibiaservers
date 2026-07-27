import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-98-with-reviews-server');
}

export default function InfernalOt1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-98-with-reviews-server" />;
}
