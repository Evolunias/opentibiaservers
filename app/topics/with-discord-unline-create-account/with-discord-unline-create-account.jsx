import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-create-account');
}

export default function WithDiscordUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-create-account" />;
}
