import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-review');
}

export default function Tibia86FreshStartReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-review" />;
}
