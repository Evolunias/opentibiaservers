import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-review');
}

export default function OriginaltibiaReviewKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-review" />;
}
