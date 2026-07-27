import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-review');
}

export default function HarmoniaOtReviewKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-review" />;
}
