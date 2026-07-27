import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-discord');
}

export default function TibiaCustomServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-discord" />;
}
