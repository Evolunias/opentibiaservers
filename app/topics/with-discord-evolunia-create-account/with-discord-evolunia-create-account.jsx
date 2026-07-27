import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-create-account');
}

export default function WithDiscordEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-create-account" />;
}
