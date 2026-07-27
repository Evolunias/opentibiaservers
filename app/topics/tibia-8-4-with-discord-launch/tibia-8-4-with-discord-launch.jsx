import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-launch');
}

export default function Tibia84WithDiscordLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-launch" />;
}
