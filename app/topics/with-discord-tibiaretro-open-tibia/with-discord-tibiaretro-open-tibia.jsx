import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-open-tibia');
}

export default function WithDiscordTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-open-tibia" />;
}
