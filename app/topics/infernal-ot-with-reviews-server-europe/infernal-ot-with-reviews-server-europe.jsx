import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-reviews-server-europe');
}

export default function InfernalOtWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-reviews-server-europe" />;
}
