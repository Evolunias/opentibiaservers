import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-germany');
}

export default function RetroPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-germany" />;
}
