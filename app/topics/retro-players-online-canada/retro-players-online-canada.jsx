import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-canada');
}

export default function RetroPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-canada" />;
}
