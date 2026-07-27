import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-client');
}

export default function WithDiscordOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-client" />;
}
