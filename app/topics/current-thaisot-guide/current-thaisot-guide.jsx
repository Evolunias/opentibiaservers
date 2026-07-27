import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-guide');
}

export default function CurrentThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-guide" />;
}
