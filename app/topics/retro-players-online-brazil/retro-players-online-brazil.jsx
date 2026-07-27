import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-brazil');
}

export default function RetroPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-brazil" />;
}
