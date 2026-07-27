import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-latin-america');
}

export default function RetroDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-latin-america" />;
}
