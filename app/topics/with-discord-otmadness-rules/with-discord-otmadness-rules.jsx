import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-rules');
}

export default function WithDiscordOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-rules" />;
}
