import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-latin-america');
}

export default function CoxaotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-latin-america" />;
}
