import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-review');
}

export default function Tibia11FreshStartReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-review" />;
}
