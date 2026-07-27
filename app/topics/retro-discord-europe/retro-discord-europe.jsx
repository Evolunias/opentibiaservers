import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-europe');
}

export default function RetroDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-europe" />;
}
