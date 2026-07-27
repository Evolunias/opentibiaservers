import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-guide');
}

export default function FreshStartOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-guide" />;
}
