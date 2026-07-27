import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-create-account');
}

export default function WithDiscordTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-create-account" />;
}
