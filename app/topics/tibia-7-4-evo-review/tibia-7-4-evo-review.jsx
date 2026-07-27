import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-review');
}

export default function Tibia74EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-review" />;
}
