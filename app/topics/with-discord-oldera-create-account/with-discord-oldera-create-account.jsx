import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-create-account');
}

export default function WithDiscordOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-create-account" />;
}
