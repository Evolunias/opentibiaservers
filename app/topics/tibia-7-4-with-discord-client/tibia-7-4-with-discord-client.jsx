import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-discord-client');
}

export default function Tibia74WithDiscordClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-discord-client" />;
}
