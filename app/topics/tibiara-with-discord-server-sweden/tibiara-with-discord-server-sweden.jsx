import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-sweden');
}

export default function TibiaraWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-sweden" />;
}
