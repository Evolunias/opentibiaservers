import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-guide');
}

export default function NewNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-guide" />;
}
