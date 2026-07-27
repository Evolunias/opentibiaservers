import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-argentina');
}

export default function RetroPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-argentina" />;
}
