import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-discord');
}

export default function TibiaHighExpServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-discord" />;
}
