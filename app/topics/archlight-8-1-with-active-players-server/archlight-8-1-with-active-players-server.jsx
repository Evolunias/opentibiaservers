import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-with-active-players-server');
}

export default function Archlight81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-with-active-players-server" />;
}
