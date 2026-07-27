import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-forum');
}

export default function WithDiscordNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-forum" />;
}
