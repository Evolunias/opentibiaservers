import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-login');
}

export default function WithDiscordOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-login" />;
}
