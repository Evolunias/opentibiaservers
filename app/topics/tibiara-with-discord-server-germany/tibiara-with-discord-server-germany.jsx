import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-germany');
}

export default function TibiaraWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-germany" />;
}
