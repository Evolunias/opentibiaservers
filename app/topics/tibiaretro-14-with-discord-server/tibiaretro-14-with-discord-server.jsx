import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-with-discord-server');
}

export default function Tibiaretro14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-with-discord-server" />;
}
