import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-sweden');
}

export default function ElderaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-sweden" />;
}
