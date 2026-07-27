import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-poland');
}

export default function RetroDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-poland" />;
}
