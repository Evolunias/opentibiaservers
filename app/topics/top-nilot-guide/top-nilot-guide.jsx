import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-guide');
}

export default function TopNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-guide" />;
}
