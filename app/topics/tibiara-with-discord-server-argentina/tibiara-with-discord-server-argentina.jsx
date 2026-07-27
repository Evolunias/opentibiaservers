import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-argentina');
}

export default function TibiaraWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-argentina" />;
}
