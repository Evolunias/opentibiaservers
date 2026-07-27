import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-official');
}

export default function WithReviewsCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-official" />;
}
