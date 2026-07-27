import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-discord-south-america');
}

export default function RetroDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-discord-south-america" />;
}
