import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-create-account');
}

export default function WithDiscordTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-create-account" />;
}
