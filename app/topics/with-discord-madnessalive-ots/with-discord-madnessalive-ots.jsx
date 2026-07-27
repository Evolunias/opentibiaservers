import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-ots');
}

export default function WithDiscordMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-ots" />;
}
