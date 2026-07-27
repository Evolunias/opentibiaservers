import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-poland');
}

export default function RetroPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-poland" />;
}
