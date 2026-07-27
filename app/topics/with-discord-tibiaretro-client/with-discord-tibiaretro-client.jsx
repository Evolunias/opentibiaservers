import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-client');
}

export default function WithDiscordTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-client" />;
}
