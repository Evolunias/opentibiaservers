import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-forum');
}

export default function WithDiscordXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-forum" />;
}
