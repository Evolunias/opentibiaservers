import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-review');
}

export default function Tibia96EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-review" />;
}
