import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-rules');
}

export default function WithDiscordInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-rules" />;
}
