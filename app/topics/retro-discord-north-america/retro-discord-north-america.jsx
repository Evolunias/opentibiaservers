import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-north-america');
}

export default function RetroDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-north-america" />;
}
