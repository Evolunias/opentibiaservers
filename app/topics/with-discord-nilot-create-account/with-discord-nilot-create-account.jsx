import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-create-account');
}

export default function WithDiscordNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-create-account" />;
}
