import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-review');
}

export default function SaintsotReviewKeywordPage() {
  return <StaticKeywordPage slug="saintsot-review" />;
}
