import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-review');
}

export default function Tibia100EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-review" />;
}
