import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-baiak-ilusion-open-tibia');
}

export default function WithDiscordBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-baiak-ilusion-open-tibia" />;
}
