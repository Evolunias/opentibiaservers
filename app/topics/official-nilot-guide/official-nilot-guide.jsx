import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-guide');
}

export default function OfficialNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-guide" />;
}
