import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-review');
}

export default function Tibia14FreshStartReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-review" />;
}
