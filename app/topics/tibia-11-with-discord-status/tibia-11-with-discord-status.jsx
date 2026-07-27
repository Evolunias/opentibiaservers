import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-status');
}

export default function Tibia11WithDiscordStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-status" />;
}
