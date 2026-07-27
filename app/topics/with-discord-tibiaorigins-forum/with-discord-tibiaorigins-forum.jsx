import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-forum');
}

export default function WithDiscordTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-forum" />;
}
