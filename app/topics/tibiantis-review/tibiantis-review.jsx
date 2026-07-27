import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-review');
}

export default function TibiantisReviewKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-review" />;
}
