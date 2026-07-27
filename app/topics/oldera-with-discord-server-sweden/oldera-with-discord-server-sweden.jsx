import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-sweden');
}

export default function OlderaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-sweden" />;
}
