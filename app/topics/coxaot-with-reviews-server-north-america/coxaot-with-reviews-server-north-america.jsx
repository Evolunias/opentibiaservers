import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-north-america');
}

export default function CoxaotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-north-america" />;
}
