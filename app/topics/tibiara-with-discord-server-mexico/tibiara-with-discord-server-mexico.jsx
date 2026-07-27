import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-mexico');
}

export default function TibiaraWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-mexico" />;
}
