import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-with-discord-server');
}

export default function Tibiaretro11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-with-discord-server" />;
}
