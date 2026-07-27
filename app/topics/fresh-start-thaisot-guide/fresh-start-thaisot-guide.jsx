import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-guide');
}

export default function FreshStartThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-guide" />;
}
