import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-reviews');
}

export default function InfernalOtReviewsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-reviews" />;
}
