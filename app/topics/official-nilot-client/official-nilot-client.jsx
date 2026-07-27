import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-client');
}

export default function OfficialNilotClientKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-client" />;
}
