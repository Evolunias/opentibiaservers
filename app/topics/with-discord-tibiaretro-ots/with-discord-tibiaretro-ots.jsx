import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-ots');
}

export default function WithDiscordTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-ots" />;
}
