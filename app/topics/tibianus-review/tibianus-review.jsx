import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-review');
}

export default function TibianusReviewKeywordPage() {
  return <StaticKeywordPage slug="tibianus-review" />;
}
