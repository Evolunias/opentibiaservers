import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-launch');
}

export default function Tibia11WithDiscordLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-launch" />;
}
