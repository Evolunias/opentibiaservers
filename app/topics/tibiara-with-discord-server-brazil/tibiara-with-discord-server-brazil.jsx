import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-brazil');
}

export default function TibiaraWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-brazil" />;
}
