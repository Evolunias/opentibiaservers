import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-review');
}

export default function MistOfDeathReviewKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-review" />;
}
