import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-with-discord-server');
}

export default function Tibiaretro71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-with-discord-server" />;
}
