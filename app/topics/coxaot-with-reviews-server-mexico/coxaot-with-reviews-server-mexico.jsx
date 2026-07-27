import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-mexico');
}

export default function CoxaotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-mexico" />;
}
