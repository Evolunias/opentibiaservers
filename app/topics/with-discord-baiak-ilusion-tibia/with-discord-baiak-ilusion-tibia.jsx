import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-baiak-ilusion-tibia');
}

export default function WithDiscordBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-baiak-ilusion-tibia" />;
}
