import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-tibia');
}

export default function WithDiscordMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-tibia" />;
}
