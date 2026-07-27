import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-login');
}

export default function WithDiscordArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-login" />;
}
