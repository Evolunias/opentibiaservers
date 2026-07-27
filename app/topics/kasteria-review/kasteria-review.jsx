import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-review');
}

export default function KasteriaReviewKeywordPage() {
  return <StaticKeywordPage slug="kasteria-review" />;
}
