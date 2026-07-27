import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-baiak-ilusion-server');
}

export default function WithDiscordBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-baiak-ilusion-server" />;
}
