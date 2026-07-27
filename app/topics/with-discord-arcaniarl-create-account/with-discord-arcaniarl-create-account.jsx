import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-create-account');
}

export default function WithDiscordArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-create-account" />;
}
