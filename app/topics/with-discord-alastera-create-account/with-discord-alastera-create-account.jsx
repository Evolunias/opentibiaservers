import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-create-account');
}

export default function WithDiscordAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-create-account" />;
}
