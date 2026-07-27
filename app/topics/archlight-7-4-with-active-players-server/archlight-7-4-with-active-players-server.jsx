import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-with-active-players-server');
}

export default function Archlight74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-with-active-players-server" />;
}
