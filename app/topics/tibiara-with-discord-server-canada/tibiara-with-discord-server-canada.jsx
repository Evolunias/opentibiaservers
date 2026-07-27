import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-canada');
}

export default function TibiaraWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-canada" />;
}
