import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-guide');
}

export default function CurrentCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-guide" />;
}
