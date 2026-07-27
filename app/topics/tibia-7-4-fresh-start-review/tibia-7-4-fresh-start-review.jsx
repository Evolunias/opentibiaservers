import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-fresh-start-review');
}

export default function Tibia74FreshStartReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-fresh-start-review" />;
}
