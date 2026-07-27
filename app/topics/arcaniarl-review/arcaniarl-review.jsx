import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-review');
}

export default function ArcaniarlReviewKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-review" />;
}
