import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-usa');
}

export default function TibiaretroWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-usa" />;
}
