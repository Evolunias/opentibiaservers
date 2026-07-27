import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-discord');
}

export default function WithDiscordInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-discord" />;
}
