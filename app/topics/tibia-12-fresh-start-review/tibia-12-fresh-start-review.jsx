import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-review');
}

export default function Tibia12FreshStartReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-review" />;
}
