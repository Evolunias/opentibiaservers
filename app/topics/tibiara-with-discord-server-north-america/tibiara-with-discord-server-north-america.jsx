import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-north-america');
}

export default function TibiaraWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-north-america" />;
}
