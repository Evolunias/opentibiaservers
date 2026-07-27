import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-forum');
}

export default function WithDiscordTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-forum" />;
}
