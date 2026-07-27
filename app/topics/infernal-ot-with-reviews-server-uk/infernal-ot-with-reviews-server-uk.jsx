import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-uk');
}

export default function InfernalOtWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-uk" />;
}
