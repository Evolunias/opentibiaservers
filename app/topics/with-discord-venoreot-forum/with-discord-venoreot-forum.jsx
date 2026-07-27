import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-forum');
}

export default function WithDiscordVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-forum" />;
}
