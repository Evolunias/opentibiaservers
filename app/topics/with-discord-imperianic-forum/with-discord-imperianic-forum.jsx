import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-forum');
}

export default function WithDiscordImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-forum" />;
}
