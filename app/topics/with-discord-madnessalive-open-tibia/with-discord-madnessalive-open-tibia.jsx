import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-open-tibia');
}

export default function WithDiscordMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-open-tibia" />;
}
