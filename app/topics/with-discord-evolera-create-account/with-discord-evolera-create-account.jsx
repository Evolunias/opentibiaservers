import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-create-account');
}

export default function WithDiscordEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-create-account" />;
}
