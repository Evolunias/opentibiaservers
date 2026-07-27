import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-official');
}

export default function WithDiscordTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-official" />;
}
