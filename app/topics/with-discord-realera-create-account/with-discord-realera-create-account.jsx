import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-create-account');
}

export default function WithDiscordRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-create-account" />;
}
