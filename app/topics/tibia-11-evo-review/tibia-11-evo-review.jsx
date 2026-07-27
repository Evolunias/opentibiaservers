import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-review');
}

export default function Tibia11EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-review" />;
}
