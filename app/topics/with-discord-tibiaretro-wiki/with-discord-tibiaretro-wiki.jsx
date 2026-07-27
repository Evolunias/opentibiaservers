import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-wiki');
}

export default function WithDiscordTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-wiki" />;
}
