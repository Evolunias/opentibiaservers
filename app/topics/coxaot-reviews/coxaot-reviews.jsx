import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-reviews');
}

export default function CoxaotReviewsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-reviews" />;
}
