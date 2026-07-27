import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-uk');
}

export default function RetroDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-uk" />;
}
