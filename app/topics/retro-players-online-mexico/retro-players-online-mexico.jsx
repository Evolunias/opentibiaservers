import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-mexico');
}

export default function RetroPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-mexico" />;
}
