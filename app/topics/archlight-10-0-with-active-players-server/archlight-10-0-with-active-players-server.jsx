import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-with-active-players-server');
}

export default function Archlight100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-with-active-players-server" />;
}
