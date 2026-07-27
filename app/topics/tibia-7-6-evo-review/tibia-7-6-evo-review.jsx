import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-review');
}

export default function Tibia76EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-review" />;
}
