import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-evo-review');
}

export default function Tibia1098EvoReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-evo-review" />;
}
