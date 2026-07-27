import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-create-account');
}

export default function WithDiscordThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-create-account" />;
}
