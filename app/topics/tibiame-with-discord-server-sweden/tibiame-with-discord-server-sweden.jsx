import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-discord-server-sweden');
}

export default function TibiameWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-discord-server-sweden" />;
}
