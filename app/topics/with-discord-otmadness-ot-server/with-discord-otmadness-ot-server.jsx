import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-ot-server');
}

export default function WithDiscordOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-ot-server" />;
}
