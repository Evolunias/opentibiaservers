import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-create-account');
}

export default function WithDiscordLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-create-account" />;
}
