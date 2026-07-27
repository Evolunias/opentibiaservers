import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-tibia');
}

export default function WithDiscordTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-tibia" />;
}
