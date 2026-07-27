import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-usa');
}

export default function RetroPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-usa" />;
}
