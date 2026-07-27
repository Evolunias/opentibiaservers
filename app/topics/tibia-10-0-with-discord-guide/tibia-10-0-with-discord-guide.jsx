import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-discord-guide');
}

export default function Tibia100WithDiscordGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-discord-guide" />;
}
