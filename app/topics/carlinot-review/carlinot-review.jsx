import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-review');
}

export default function CarlinotReviewKeywordPage() {
  return <StaticKeywordPage slug="carlinot-review" />;
}
