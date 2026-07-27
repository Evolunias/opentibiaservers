import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-register');
}

export default function WithDiscordOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-register" />;
}
