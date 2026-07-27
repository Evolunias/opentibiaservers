import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-review');
}

export default function Tibia84EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-review" />;
}
