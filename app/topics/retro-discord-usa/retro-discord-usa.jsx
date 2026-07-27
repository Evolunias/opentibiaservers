import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-usa');
}

export default function RetroDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-usa" />;
}
