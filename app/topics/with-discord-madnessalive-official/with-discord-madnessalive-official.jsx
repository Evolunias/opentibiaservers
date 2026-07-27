import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-official');
}

export default function WithDiscordMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-official" />;
}
