import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-private-server');
}

export default function OfficialNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-private-server" />;
}
