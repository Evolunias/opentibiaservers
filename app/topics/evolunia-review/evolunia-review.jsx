import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-review');
}

export default function EvoluniaReviewKeywordPage() {
  return <StaticKeywordPage slug="evolunia-review" />;
}
