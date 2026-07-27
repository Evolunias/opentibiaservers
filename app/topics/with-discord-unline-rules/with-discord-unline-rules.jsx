import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-rules');
}

export default function WithDiscordUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-rules" />;
}
