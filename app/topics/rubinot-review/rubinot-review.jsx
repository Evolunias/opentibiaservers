import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-review');
}

export default function RubinotReviewKeywordPage() {
  return <StaticKeywordPage slug="rubinot-review" />;
}
