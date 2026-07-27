import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-review');
}

export default function OxygenotReviewKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-review" />;
}
