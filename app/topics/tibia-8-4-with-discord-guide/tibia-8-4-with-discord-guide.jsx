import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-guide');
}

export default function Tibia84WithDiscordGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-guide" />;
}
