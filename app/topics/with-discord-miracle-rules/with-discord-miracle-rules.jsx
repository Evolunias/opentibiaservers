import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-rules');
}

export default function WithDiscordMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-rules" />;
}
