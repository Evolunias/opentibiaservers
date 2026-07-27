import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-review');
}

export default function Tibia772EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-review" />;
}
