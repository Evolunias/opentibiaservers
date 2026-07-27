import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-europe');
}

export default function RetroPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-europe" />;
}
