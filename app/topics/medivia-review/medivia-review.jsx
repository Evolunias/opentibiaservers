import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-review');
}

export default function MediviaReviewKeywordPage() {
  return <StaticKeywordPage slug="medivia-review" />;
}
