import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot');
}

export default function OfficialNilotKeywordPage() {
  return <StaticKeywordPage slug="official-nilot" />;
}
