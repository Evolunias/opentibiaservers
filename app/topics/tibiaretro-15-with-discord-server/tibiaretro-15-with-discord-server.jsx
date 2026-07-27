import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-with-discord-server');
}

export default function Tibiaretro15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-with-discord-server" />;
}
