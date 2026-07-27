import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-guide');
}

export default function FreshStartNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-guide" />;
}
