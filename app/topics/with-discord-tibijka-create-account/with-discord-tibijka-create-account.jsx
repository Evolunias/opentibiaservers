import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-create-account');
}

export default function WithDiscordTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-create-account" />;
}
