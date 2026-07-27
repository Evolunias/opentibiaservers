import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-forum');
}

export default function WithDiscordEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-forum" />;
}
