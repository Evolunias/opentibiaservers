import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-create-account');
}

export default function WithDiscordThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-create-account" />;
}
