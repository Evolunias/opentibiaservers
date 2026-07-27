import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-create-account');
}

export default function WithDiscordMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-create-account" />;
}
