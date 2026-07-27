import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-discord');
}

export default function WithDiscordMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-discord" />;
}
