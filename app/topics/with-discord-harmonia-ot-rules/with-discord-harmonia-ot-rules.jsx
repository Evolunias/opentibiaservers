import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-rules');
}

export default function WithDiscordHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-rules" />;
}
