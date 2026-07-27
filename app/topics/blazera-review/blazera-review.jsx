import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-review');
}

export default function BlazeraReviewKeywordPage() {
  return <StaticKeywordPage slug="blazera-review" />;
}
