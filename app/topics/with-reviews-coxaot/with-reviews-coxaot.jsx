import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot');
}

export default function WithReviewsCoxaotKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot" />;
}
