import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-discord-guide');
}

export default function Tibia1098WithDiscordGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-discord-guide" />;
}
