import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-forum');
}

export default function WithDiscordMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-forum" />;
}
