import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-review');
}

export default function CanobReviewKeywordPage() {
  return <StaticKeywordPage slug="canob-review" />;
}
