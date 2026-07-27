import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-guide');
}

export default function Tibia71WithDiscordGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-guide" />;
}
