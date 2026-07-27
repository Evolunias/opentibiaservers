import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-client');
}

export default function WithDiscordInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-client" />;
}
