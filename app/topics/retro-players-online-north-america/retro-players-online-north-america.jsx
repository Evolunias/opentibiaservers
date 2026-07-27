import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-north-america');
}

export default function RetroPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-north-america" />;
}
