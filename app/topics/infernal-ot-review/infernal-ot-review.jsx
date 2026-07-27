import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-review');
}

export default function InfernalOtReviewKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-review" />;
}
