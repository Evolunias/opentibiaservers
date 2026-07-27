import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-create-account');
}

export default function WithDiscordCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-create-account" />;
}
