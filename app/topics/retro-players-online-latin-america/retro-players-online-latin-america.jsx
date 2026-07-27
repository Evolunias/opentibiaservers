import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-latin-america');
}

export default function RetroPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-latin-america" />;
}
