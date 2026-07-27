import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-sweden');
}

export default function TibiaretroWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-sweden" />;
}
