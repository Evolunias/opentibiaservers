import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-mexico');
}

export default function RetroDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-mexico" />;
}
