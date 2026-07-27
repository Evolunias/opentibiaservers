import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-create-account');
}

export default function WithDiscordCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-create-account" />;
}
