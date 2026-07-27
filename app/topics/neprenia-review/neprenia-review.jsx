import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-review');
}

export default function NepreniaReviewKeywordPage() {
  return <StaticKeywordPage slug="neprenia-review" />;
}
