import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-review');
}

export default function SabrehavenReviewKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-review" />;
}
