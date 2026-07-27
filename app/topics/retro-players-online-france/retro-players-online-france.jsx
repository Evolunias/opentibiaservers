import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-france');
}

export default function RetroPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-france" />;
}
