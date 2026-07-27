import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-create-account');
}

export default function WithDiscordClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-create-account" />;
}
