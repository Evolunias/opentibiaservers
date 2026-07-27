import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-argentina');
}

export default function RetroDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-argentina" />;
}
