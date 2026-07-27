import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-forum');
}

export default function WithDiscordMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-forum" />;
}
