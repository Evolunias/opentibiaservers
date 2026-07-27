import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-launch');
}

export default function Tibia15WithDiscordLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-launch" />;
}
