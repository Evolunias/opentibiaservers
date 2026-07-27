import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-canada');
}

export default function RetroDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-canada" />;
}
