import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-review');
}

export default function Tibia13EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-review" />;
}
