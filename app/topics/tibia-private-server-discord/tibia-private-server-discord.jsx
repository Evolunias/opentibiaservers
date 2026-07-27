import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-discord');
}

export default function TibiaPrivateServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-discord" />;
}
