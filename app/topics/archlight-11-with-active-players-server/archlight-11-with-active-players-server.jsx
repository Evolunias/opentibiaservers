import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-with-active-players-server');
}

export default function Archlight11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-with-active-players-server" />;
}
