import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-sweden');
}

export default function TibijkaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-sweden" />;
}
