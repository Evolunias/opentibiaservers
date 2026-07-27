import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-review');
}

export default function Tibia15FreshStartReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-review" />;
}
