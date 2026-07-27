import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-discord-launch');
}

export default function Tibia13WithDiscordLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-discord-launch" />;
}
