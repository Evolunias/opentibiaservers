import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-review');
}

export default function ImperianicReviewKeywordPage() {
  return <StaticKeywordPage slug="imperianic-review" />;
}
