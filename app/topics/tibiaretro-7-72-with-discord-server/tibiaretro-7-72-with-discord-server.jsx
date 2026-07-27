import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-with-discord-server');
}

export default function Tibiaretro772WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-with-discord-server" />;
}
