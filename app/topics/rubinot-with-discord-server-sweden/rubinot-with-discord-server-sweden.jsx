import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-discord-server-sweden');
}

export default function RubinotWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-discord-server-sweden" />;
}
