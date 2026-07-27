import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-discord-status');
}

export default function Tibia100WithDiscordStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-discord-status" />;
}
