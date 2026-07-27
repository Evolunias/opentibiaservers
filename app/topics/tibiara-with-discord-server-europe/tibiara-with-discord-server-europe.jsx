import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-europe');
}

export default function TibiaraWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-europe" />;
}
