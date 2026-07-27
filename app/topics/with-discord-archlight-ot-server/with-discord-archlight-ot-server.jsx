import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-ot-server');
}

export default function WithDiscordArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-ot-server" />;
}
