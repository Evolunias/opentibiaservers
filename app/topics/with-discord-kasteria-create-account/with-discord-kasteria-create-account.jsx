import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-create-account');
}

export default function WithDiscordKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-create-account" />;
}
