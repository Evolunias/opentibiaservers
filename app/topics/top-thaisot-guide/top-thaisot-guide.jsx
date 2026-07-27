import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-guide');
}

export default function TopThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-guide" />;
}
