import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-guide');
}

export default function Tibia11WithDiscordGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-guide" />;
}
