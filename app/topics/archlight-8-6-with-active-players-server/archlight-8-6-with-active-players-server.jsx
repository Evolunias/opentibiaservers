import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-with-active-players-server');
}

export default function Archlight86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-with-active-players-server" />;
}
