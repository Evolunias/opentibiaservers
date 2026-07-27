import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-private-server');
}

export default function WithDiscordOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-private-server" />;
}
