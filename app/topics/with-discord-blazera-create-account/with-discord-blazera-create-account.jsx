import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-create-account');
}

export default function WithDiscordBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-create-account" />;
}
