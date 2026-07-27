import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-with-discord-server');
}

export default function Tibiaretro76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-with-discord-server" />;
}
