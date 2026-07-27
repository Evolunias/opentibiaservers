import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-reviews');
}

export default function SabrehavenReviewsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-reviews" />;
}
