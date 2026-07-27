import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-with-discord-server');
}

export default function Tibiaretro96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-with-discord-server" />;
}
