import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-baiak-ilusion-website');
}

export default function WithDiscordBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-baiak-ilusion-website" />;
}
