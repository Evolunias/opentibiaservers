import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-create-account');
}

export default function WithDiscordSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-create-account" />;
}
