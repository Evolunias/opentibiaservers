import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-review');
}

export default function Tibia81FreshStartReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-review" />;
}
