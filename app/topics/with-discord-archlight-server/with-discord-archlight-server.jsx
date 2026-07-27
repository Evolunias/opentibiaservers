import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-server');
}

export default function WithDiscordArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-server" />;
}
