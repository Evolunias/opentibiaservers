import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-forum');
}

export default function WithDiscordCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-forum" />;
}
