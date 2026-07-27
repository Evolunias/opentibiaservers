import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-review');
}

export default function Tibia71EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-review" />;
}
