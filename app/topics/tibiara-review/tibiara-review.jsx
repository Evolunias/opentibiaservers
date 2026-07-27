import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-review');
}

export default function TibiaraReviewKeywordPage() {
  return <StaticKeywordPage slug="tibiara-review" />;
}
