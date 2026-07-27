import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-rules');
}

export default function WithDiscordMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-rules" />;
}
