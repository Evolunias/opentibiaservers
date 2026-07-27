import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-guide');
}

export default function ThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="thaisot-guide" />;
}
