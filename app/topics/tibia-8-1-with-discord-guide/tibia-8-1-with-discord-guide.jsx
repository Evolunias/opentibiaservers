import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-guide');
}

export default function Tibia81WithDiscordGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-guide" />;
}
