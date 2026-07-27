import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-forum');
}

export default function WithDiscordSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-forum" />;
}
