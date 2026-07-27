import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-create-account');
}

export default function WithDiscordYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-create-account" />;
}
