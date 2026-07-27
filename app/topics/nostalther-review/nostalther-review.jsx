import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-review');
}

export default function NostaltherReviewKeywordPage() {
  return <StaticKeywordPage slug="nostalther-review" />;
}
