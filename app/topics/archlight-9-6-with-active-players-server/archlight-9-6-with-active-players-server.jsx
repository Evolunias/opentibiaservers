import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-with-active-players-server');
}

export default function Archlight96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-with-active-players-server" />;
}
