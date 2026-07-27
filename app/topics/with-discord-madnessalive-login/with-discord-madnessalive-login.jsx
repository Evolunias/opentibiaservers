import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-login');
}

export default function WithDiscordMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-login" />;
}
