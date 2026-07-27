import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-sweden');
}

export default function TibiascapeWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-sweden" />;
}
