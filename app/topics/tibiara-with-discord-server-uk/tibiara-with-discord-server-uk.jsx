import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-uk');
}

export default function TibiaraWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-uk" />;
}
