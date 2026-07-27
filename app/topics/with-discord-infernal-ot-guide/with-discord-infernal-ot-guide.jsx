import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-guide');
}

export default function WithDiscordInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-guide" />;
}
