import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-client');
}

export default function WithDiscordArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-client" />;
}
