import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-france');
}

export default function TibiaraWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-france" />;
}
