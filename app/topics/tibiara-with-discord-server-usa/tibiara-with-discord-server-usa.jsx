import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-usa');
}

export default function TibiaraWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-usa" />;
}
