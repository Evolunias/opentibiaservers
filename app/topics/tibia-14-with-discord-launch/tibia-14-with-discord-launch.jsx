import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-discord-launch');
}

export default function Tibia14WithDiscordLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-discord-launch" />;
}
