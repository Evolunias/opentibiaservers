import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-create-account');
}

export default function WithDiscordTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-create-account" />;
}
