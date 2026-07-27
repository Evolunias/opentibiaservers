import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-create-account');
}

export default function WithDiscordArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-create-account" />;
}
