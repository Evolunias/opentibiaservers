import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-france');
}

export default function RetroDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-france" />;
}
