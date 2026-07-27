import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-forum');
}

export default function WithDiscordCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-forum" />;
}
