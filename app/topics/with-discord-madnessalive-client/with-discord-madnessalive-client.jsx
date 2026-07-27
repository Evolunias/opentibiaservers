import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-client');
}

export default function WithDiscordMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-client" />;
}
