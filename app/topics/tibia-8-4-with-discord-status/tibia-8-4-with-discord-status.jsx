import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-discord-status');
}

export default function Tibia84WithDiscordStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-discord-status" />;
}
