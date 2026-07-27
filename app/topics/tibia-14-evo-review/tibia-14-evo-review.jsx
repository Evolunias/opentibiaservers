import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-review');
}

export default function Tibia14EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-review" />;
}
