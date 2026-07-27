import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-baiak-ilusion-client');
}

export default function WithDiscordBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-baiak-ilusion-client" />;
}
