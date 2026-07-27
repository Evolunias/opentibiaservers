import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-guide');
}

export default function CurrentNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-guide" />;
}
