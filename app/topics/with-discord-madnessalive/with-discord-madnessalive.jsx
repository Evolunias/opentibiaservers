import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive');
}

export default function WithDiscordMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive" />;
}
