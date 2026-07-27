import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-germany');
}

export default function RetroDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-germany" />;
}
