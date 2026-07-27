import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-create-account');
}

export default function WithDiscordSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-create-account" />;
}
