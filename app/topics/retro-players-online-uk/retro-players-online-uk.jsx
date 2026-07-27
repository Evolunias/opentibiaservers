import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-uk');
}

export default function RetroPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-uk" />;
}
