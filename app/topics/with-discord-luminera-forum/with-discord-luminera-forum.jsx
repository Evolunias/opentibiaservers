import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-forum');
}

export default function WithDiscordLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-forum" />;
}
