import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-review');
}

export default function SerenityReviewKeywordPage() {
  return <StaticKeywordPage slug="serenity-review" />;
}
