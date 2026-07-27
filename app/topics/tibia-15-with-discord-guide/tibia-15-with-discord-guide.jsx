import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-guide');
}

export default function Tibia15WithDiscordGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-guide" />;
}
