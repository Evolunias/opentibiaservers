import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-discord-server-argentina');
}

export default function TibiaretroWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-discord-server-argentina" />;
}
