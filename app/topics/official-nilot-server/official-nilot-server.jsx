import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-server');
}

export default function OfficialNilotServerKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-server" />;
}
