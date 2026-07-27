import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-server');
}

export default function WithDiscordOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-server" />;
}
