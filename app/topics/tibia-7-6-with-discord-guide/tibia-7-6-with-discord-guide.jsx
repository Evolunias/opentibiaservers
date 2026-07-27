import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-discord-guide');
}

export default function Tibia76WithDiscordGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-discord-guide" />;
}
