import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-with-active-players-server');
}

export default function Archlight76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-with-active-players-server" />;
}
