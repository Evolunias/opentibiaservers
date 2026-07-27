import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-review');
}

export default function VenoreotReviewKeywordPage() {
  return <StaticKeywordPage slug="venoreot-review" />;
}
